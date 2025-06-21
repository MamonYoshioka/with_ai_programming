import React, { useState } from 'react';

function LoginForm(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // ユーザー名入力欄の値が変更されたときに呼ばれる関数
    const handleNameChange = (event) => {
        setName(event.target.value); // Stateを更新
    } 

    // パスワード入力欄の値が変更されたときに呼ばれる関数
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // フォームが送信されたときに呼ばれる関数
    const handleSubmit = (event) => {
        event.preventDefault(); // デフォルトのフォーム送信を防止
        console.log('Login attempt:', { name, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">ユーザー名:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="password">パスワード:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">ログイン</button>
        </form>
    );
}

export default LoginForm;