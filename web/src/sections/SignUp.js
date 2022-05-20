import { Grid, Input, Button, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import { useState } from 'react';
import userService from '../service/user';

import background from '../assets/background.png';

const marginStyle = { margin: '0.5em 0' };

function SignUp() {
    const classes = useStyles();
    const history = useHistory();

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ responseMessage, setResponseMessage ] = useState('');
    const [ error, setError ] = useState('');

    const handleSignUp = async () => {
        try {
            await userService.createUser({
                first_name: firstName,
                last_name: lastName,
                email,
                password
            });
            
            setError('');
            setResponseMessage('User created, you will be redirected to login page.')
            setTimeout(() => {
                history.push("/");
            }, 2500);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className={classes.body} style={{ backgroundImage: `url(${background})`}}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Grid
                    item
                    xs={4}
                >
                    <Input
                        fullWidth
                        required
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target?.value)}
                        style={marginStyle}
                    />
                    <Input
                        fullWidth
                        required
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target?.value)}
                        style={marginStyle}
                    />
                    <Input
                        fullWidth
                        required
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target?.value)}
                        style={marginStyle}
                    />
                    <Input
                        fullWidth
                        required
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target?.value)}
                        style={marginStyle}
                    />
                    {responseMessage &&
                        <div style={{ color: 'green' }}><strong>{responseMessage}</strong></div>
                    }
                    {error &&
                        <div style={{ color: 'red' }}><strong>{error}</strong></div>
                    }
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSignUp}
                                disabled={!firstName || !lastName || !email || !password}
                                style={marginStyle}
                            >
                                Register User
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link href="/login"> Back to login </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUp;