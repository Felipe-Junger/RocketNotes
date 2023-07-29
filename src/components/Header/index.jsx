import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";

export function Header() {
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

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
