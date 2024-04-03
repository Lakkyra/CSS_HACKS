

export function Signup(handleSubmit, email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange){
    return (
        <div>
            <h2>Let's Contribute</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Business Name:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Which Setor would you like to donate to</label>
                    <select>
                        <option>Food</option>
                        <option>Health</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Rural Development</option>
                        <option>Others</option>
                    </select>
                </div>
                <div>
                    <label>Set a Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
};

export function Signin(handleSubmit, email, handleEmailChange, password, handlePasswordChange){
    return (
        <div>
            <h2>Your help to the society matters, Welcome back</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}