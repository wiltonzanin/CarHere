interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: '123',
                user: {
                    name: 'Wilton',
                    email: 'wilton@email.com',
                },
            });
        }, 750);
    });
}