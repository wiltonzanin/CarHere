import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';
import { getAuth } from 'firebase/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            //Alterar para multiGet
            const storageUser = await AsyncStorage.getItem('@MeuPossante:user');
            const storageToken = await AsyncStorage.getItem('@MeuPossante:token');
            
            if (storageUser && storageToken) {
                //Exemplo de implementação de Token
                setUser(JSON.parse(storageUser));
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setLoading(false);
            }
        };

        loadStorageData();
    }, []);
    async function signIn() {
        const response = await auth.signIn();
        setUser(response.user);
        //Exemplo de implementação de Token
        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@MeuPossante:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@MeuPossante:token', response.token);
        
    };

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    };

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}