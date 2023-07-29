import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";

const llm = new OpenAI({});
const prompt = PromptTemplate.fromTemplate(
  "What is a good name for a company that makes {product}?"
);

const chain = new LLMChain({
  llm,
  prompt,
});

// Run is a convenience method for chains with prompts that require one input and one output.
const result = await chain.run("AI custom dashboards");
