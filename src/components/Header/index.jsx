import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";

export function Header() {
    const { signOut } = useAuth();

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Felipe-Junger.png" alt="Profile Picture"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>Felipe Junger</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
