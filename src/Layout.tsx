import type { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { onAuthStateChange, signInWithGoogle, signOutUser } from "./firebase/authService";

function Layout() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set up auth state listener
        const unsubscribe = onAuthStateChange((user) => {
            setUser(user);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    return (
        <LayoutContainer>
            <Header>
                <Title>Application Name</Title>
                <Spacer />
                <LoginWrapper>
                    {loading ? (
                        <Username>...</Username>
                    ) : user ? (
                        <>
                            <Username>{user.displayName}</Username>
                            <LoginButton onClick={handleSignOut}>Sign Out</LoginButton>
                        </>
                    ) : (
                        <>
                            <LoginButton onClick={handleSignIn}>Sign in with Google</LoginButton>
                        </>
                    )}
                </LoginWrapper>
            </Header>
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutContainer>
    );
}

export default Layout;

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Header = styled.header`
    display: flex;
    padding: var(--size-m);
    background-color: var(--background-secondary);
    align-items: center;
    flex-shrink: 0;
`;

const MainContent = styled.main`
    flex: 1;
    overflow: auto;
`;

const Title = styled.p`
    color: var(--color-primary);
    font-size: var(--size-m);
`;

const LoginWrapper = styled.div`
    display: flex;
    gap: var(--size-s);
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

const Username = styled.p`
    color: var(--color-primary);
    font-size: var(--size-m);
`;

const LoginButton = styled.button`
    background-color: var(--background-tertiary);
    color: var(--color-primary);
    padding: 0 var(--size-m);
    border-radius: var(--size-s);
    font-size: var(--size-m);
    border: none;
    cursor: pointer;
`;
