import { Container, Profile } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/Felipe-Junger.png" alt="Profile Picture"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>Felipe Junger</strong>
                </div>
            </Profile>
        </Container>
    );
}