import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../contex/AppContex';

const Auth = ({ el }) => {
  const navigate = useNavigate();
  const { isLogin } = useAppContext();
  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);
  return el;
};

const Guest = ({ el }) => {
  const navigate = useNavigate();
  const { isLogin } = useAppContext();
  useEffect(() => {
    if (isLogin) {
      navigate('/ordercar');
    }
  }, []);
  return el;
};

export { Auth, Guest };
