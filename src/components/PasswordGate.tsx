import { useRef, useState } from 'react';
import { verifyPassword } from '../utils/verifyPassword';
import './PasswordGate.css';

type PasswordGateProps = {
  onUnlock: () => void;
};

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [pw, setPw] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const isVerified = await verifyPassword(pw.trim());
      if (!isVerified) {
        setPw('');
        inputRef.current?.focus();
        return;
      }
      onUnlock();
    } catch {
      setPw('');
      inputRef.current?.focus();
    }
  };

  return (
    <div className="passwordGate">
      <div className="passwordGatePanel">
        <div className="passwordGateHeader">
          <div className="passwordGateTitle">Enter password</div>
        </div>

        <form onSubmit={onSubmit} className="passwordGateForm">
          <label htmlFor="password" className="srOnly">
            Password
          </label>
          <div className="passwordGateField">
            <input
              id="password"
              ref={inputRef}
              type="password"
              inputMode="text"
              autoFocus
              required
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Password"
              className="passwordGateInput"
            />
          </div>

          <button type="submit" className="passwordGateButton">
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
