import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
      navigate('/');
      toast('Logged in.');
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    }),
  });

  return {
    formik,
    authState,
  };
};
