import { Helmet } from "react-helmet";

export const NotFound = () => {
    return (
        <main>
            <Helmet>
                <title>404 | Bazaari</title>
            </Helmet>
            <h2>404</h2>
            <p>That page doesn't exist!</p>
        </main>
    );
};
