import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../contexts/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { getAuth } from 'firebase/auth';
import { FirebaseInit } from '../database/Firebase';

FirebaseInit();

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();
 
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#999' />
            </View>
        );
    }

    return signed ? <AppStack /> : <AuthStack />;
};

export default Routes;