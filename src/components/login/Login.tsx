import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {
  getAuth,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

interface ILoginProps {}
interface IAuthState {
  auth: {
    token: string;
    user: string;
  };
}

export const Login: React.FC<ILoginProps> = (props) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  // const idToken = useSelector((state: IAuthState) => state.auth.token);
  // const user = useSelector((state: IAuthState) => state.auth.user);
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithEmailAndPW = async () => {
    setAuthing(true);

    setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        const userCred = await signInWithEmailAndPassword(
          auth,
          'zizi3000@naver.com',
          '1qaz2wsx'
        );

        dispatch(authActions.setUser(userCred.user.email));
        dispatch(authActions.setToken(await userCred.user.getIdToken()));
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container fluid='lg'>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
