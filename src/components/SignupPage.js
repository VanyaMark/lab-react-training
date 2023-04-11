import {useState} from 'react';

const SignupPage = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nationality, setNationality] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { email, password, nationality }
        console.log('Submitted new user: ', newUser)
        props.addUser(newUser)

        // reset the state
        setEmail('')
        setPassword('')
        setNationality('')
    }

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleSelect = e => setNationality(e.target.value)

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>email: </label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <label>Nationality: </label>
        <select name="nationality" id="nationality" onChange={handleSelect}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      
      { nationality === "en" && <p> Hello <br/> Your email address is: {email} <br/> Your email address is correct</p>}
      { nationality === "de" && <p> Hallo <br/> Your email address is: {email} <br/> Your email address is correct</p>}
      { nationality === "fr" && <p> Bonjour <br/> Your email address is: {email} <br/> Your email address is correct</p>}
    </div>
  );
};

export default SignupPage;
