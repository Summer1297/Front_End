import '../assets/css/RegisterForm.css';
import { useId, useState } from 'react';

function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [usernameIsMissing, setUsernameIsMissing] = useState('');
  const [emailIsMissing, setEmailIsMissing] = useState('');
  const [emailConfirmationIsMissing, setEmailConfirmationIsMissing] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [emailMismatch, setEmailMismatch] = useState(false);

  const id = useId();

  function usernameIsValid(name) {
    return !!name;
  }

  function emailIsValid(email) {
    return /@.*\.com/.test(email);
  }

  function emailsMatch(email, confirmation) {
    return email === confirmation;
  }

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showOtherInfo, setShowOtherInfo] = useState(false);

  const statesData = [
    { name: 'NY', cities: ['New York City', 'Buffalo', 'Albany'] },
    { name: 'CA', cities: ['Los Angeles', 'San Francisco', 'San Diego'] },
    { name: 'WA', cities: ['Seattle', 'Redmond', 'Lynnwood'] },
  ];

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity('');
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <form
      className="register-form"
      onSubmit={(e) => {
        e.preventDefault();

        setUsernameIsMissing(!usernameIsValid(username) ? 'Username is required' : '');
        setEmailIsMissing(!email ? 'Email is required' : '');
        setEmailConfirmationIsMissing(!emailConfirmation ? 'Email confirmation is required' : '');
        setEmailInvalid(email && !emailIsValid(email) ? 'Invalid email format' : '');
        setEmailMismatch(emailConfirmation && !emailsMatch(email, emailConfirmation) ? 'Emails do not match' : '');

        if (usernameIsValid(username) && emailIsValid(email) && emailsMatch(email, emailConfirmation)) {
          console.log('register');
          onRegister(username, email);
          setUsername('');
          setEmail('');
          setEmailConfirmation('');
        } else {
          console.log('blocked');
        }
      }}
    >
      <span className="register-span">* = Required</span>

      <label htmlFor={`${id}-username`} className="register-label">
        {' '}
        Username*
      </label>
      {usernameIsMissing && <span className="register-error">{usernameIsMissing}</span>}
      <input
        id={`${id}-username`}
        value={username}
        onInput={(e) => {
          setUsername(e.target.value);
          setUsernameIsMissing(!usernameIsValid(e.target.value) ? 'Username is required' : '');
        }}
        className="register-input"
      />

      <label htmlFor={`${id}-email`} className="register-label">
        {' '}
        Email*
      </label>
      {emailIsMissing && <span className="register-error">{emailIsMissing}</span>}
      {emailInvalid && <span className="register-error">{emailInvalid}</span>}
      <input
        id={`${id}-email`}
        value={email}
        onInput={(e) => {
          setEmail(e.target.value);
          setEmailIsMissing(!e.target.value ? 'Email is required' : '');
          setEmailInvalid(e.target.value && !emailIsValid(e.target.value) ? 'Invalid email format' : '');
          setEmailMismatch(false);
        }}
        className="register-input"
      />

      <label htmlFor={`${id}-email-confirmation`} className="register-label">
        {' '}
        Confirm Email*
      </label>
      {emailConfirmationIsMissing && <span className="register-error">{emailConfirmationIsMissing}</span>}
      {emailMismatch && <span className="register-error">{emailMismatch}</span>}
      <input
        id={`${id}-email-confirmation`}
        value={emailConfirmation}
        onInput={(e) => {
          setEmailConfirmation(e.target.value);
          setEmailConfirmationIsMissing(!e.target.value ? 'Email confirmation is required' : '');
          setEmailMismatch(e.target.value && !emailsMatch(email, e.target.value) ? 'Emails do not match' : '');
        }}
        className="register-input"
      />

      <div className="select-container">
        <label className="select-label">State</label>
        <select className="select-input" value={selectedState} onChange={(e) => handleStateChange(e.target.value)}>
          <option value="">Select a state</option>
          {statesData.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        {selectedState && (
          <div className="city-select-container">
            <label className="select-label">City</label>
            <select className="select-input" value={selectedCity} onChange={(e) => handleCityChange(e.target.value)}>
              <option value="">Select a city</option>
              {statesData.find((state) => state.name === selectedState)?.cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="checkbox-container">
        <label htmlFor={`${id}-checkbox`} className="checkbox-label">
          Other cities you want to go to?:
        </label>
        <input
          id={`${id}-checkbox`}
          type="checkbox"
          className="checkbox-input"
          checked={showOtherInfo}
          onChange={() => setShowOtherInfo(!showOtherInfo)}
        />
      </div>

      {showOtherInfo && (
        <div className="other-info-container">
          <label className="other-info-label">Other Cities</label>
          <input className="other-info-input" type="text" placeholder="Enter other information" />
        </div>
      )}

      <button type="submit" className="register-button">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
