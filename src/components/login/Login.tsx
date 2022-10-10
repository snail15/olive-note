import React, { SyntheticEvent, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Loader } from '../../UI/Loader';
import { FirebaseError } from 'firebase/app';

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = (props) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [signinError, setSigninError] = useState(false);

  const signInWithEmailAndPW = async () => {
    setAuthing(true);

    setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        dispatch(authActions.setUser(userCred.user.email));
        dispatch(authActions.setToken(await userCred.user.getIdToken()));
        navigate('/');
      })
      .catch((err: FirebaseError) => {
        setSigninError(true);
      });

    setAuthing(false);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const inputFieldName = target.name;
    switch (inputFieldName) {
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      default:
        console.log('login input field not found');
        break;
    }
  };

  const loginHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Container fluid='md'>
      {authing && <Loader />}
      {!authing && (
        <Form onSubmit={loginHandler}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name='email'
              type='email'
              placeholder='Enter email'
              onChange={changeHandler}
            />
            {signinError && (
              <Form.Text className='text-muted'>
                Please check your email
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type='password'
              placeholder='Password'
              onChange={changeHandler}
            />
            {signinError && (
              <Form.Text className='text-muted'>
                Please check your password
              </Form.Text>
            )}
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            onClick={signInWithEmailAndPW}
          >
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};
