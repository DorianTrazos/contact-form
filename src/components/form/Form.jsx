import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/form-validations';

const Form = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm();

  const selectedRadio = watch('query');
  const consentCheck = watch('consent');
  console.log(consentCheck);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>First Name *</label>
        <input type='text' id='name' {...register('name', FORM_VALIDATIONS.NAME)} />
        <span>{errors?.name?.message}</span>
      </div>
      <div>
        <label htmlFor='surname'>Last Name *</label>
        <input type='text' id='surname' {...register('surname', FORM_VALIDATIONS.SURNAME)} />
        <span>{errors?.surname?.message}</span>
      </div>
      <div>
        <label htmlFor='email'>Email *</label>
        <input type='text' id='email' {...register('email', FORM_VALIDATIONS.EMAIL)} />
        <span>{errors?.email?.message}</span>
      </div>
      <div>
        <span>Query Type *</span>
        <div>
          <input type='radio' id='general' value='General Enquiry' {...register('query', FORM_VALIDATIONS.QUERY)} />
          <label htmlFor='general'>General Enquiry</label>
        </div>
        <div>
          <input type='radio' id='support' value='Support Request' {...register('query')} />
          <label htmlFor='support'>Support Request</label>
        </div>
        <span>{errors?.query?.message}</span>
      </div>
      <div>
        <label htmlFor='message'>Message *</label>
        <textarea id='message' {...register('message')}></textarea>
      </div>
      {/* <span>This field is required</span> */}
      <div>
        <input type='checkbox' id='consent' {...register('consent', FORM_VALIDATIONS.CONSENT)} />
        <label htmlFor='consent'>I consent to being contacted by the team *</label>
        <span>{errors?.consent?.message}</span>
      </div>
      <input type='submit' value='Submit' />
    </form>
  );
};

const onSubmit = data => {
  console.log(data);
};

export default Form;
