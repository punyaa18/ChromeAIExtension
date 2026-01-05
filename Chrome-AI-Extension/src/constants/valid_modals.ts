/**
 * List of valid models that can be used in the application.
 * Powered by Groq
 */
export const VALID_MODELS = [
  {
    model: 'llama3-70b-8192',
    name: 'groq_llama3_70b',
    display: 'LLaMA 3 70B',
  },
  {
    model: 'llama3-8b-8192',
    name: 'groq_llama3_8b',
    display: 'LLaMA 3 8B',
  },
  {
    model: 'mixtral-8x7b-32768',
    name: 'groq_mixtral_8x7b',
    display: 'Mixtral 8x7B',
  },
]

/**
 * Type of valid models that can be used in the application.
 */
export type ValidModel =
  | 'groq_llama3_70b'
  | 'groq_llama3_8b'
  | 'groq_mixtral_8x7b'
