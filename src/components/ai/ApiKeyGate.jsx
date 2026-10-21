import { useAi } from '../../context/AiContext';

/** Banner when OpenAI browser key is missing. */
export default function ApiKeyGate() {
  const { hasApiKey, model } = useAi();

  if (hasApiKey) return null;

  return (
    <div className="ai-key-banner">
      <p>
        Connect {model} to unlock this tour feature. Add <code>OPENAI_API_KEY</code> to{' '}
        <code>.env</code> and restart the app.
      </p>
    </div>
  );
}
