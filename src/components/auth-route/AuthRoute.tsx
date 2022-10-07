import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface IAuthRouteProp {
  children?: React.ReactNode;
}

export const AuthRoute: React.FC<IAuthRouteProp> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
    return () => AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
      console.log('user auth');
      console.log(user);
    } else {
      console.log('user not authenticated');
      navigate('/login');
    }
  });

  if (loading) return <p>Loading...</p>;

  return <div>{children}</div>;
};
