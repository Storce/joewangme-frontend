'use client';

import { useState } from 'react';

export default function CopyEmail({ email }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <span
            onClick={handleCopy}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            title="Click to copy"
        >
            {email}
            {copied && <span style={{ color: 'green', marginLeft: '0.5rem' }}>(copied!)</span>}
        </span>
    );
}
