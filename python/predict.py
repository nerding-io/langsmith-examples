from dotenv import load_dotenv
from langchain.chat_models import ChatOpenAI

load_dotenv()


llm = ChatOpenAI()
llm.predict("Hello, world!")
  