import React, { useState } from "react";

interface DecisionNode {
  question?: string;
  yes?: DecisionNode;
  no?: DecisionNode;
  conclusion?: string;
}

const decisionTree: DecisionNode = {
  question: "Tem alguma luz de aviso acesa no painel?",
  yes: {
    question: "A luz é do motor (Check Engine)?",
    yes: {
      question: "O motor está funcionando irregularmente ou com perda de potência?",
      yes: {
        conclusion: "Possível problema nas velas de ignição.",
      },
      no: {
        conclusion: "Possível problema nos sensores ou no sistema de arrefecimento.",
      },
    },
    no: {
      question: "A luz é do sistema de freio?",
      yes: {
        question: "Percebe perda de eficiência ao frear?",
        yes: {
          conclusion: "Possível desgaste das pastilhas ou discos de freio.",
        },
        no: {
          conclusion: "Possível problema no fluido de freio ou sensor.",
        },
      },
      no: {
        question: "A luz é do sistema de arrefecimento?",
        yes: {
          question: "O veículo está superaquecendo?",
          yes: {
            conclusion: "Possível problema no sistema de arrefecimento.",
          },
          no: {
            conclusion: "Possível falha no sensor de temperatura.",
          },
        },
        no: {
          conclusion: "Recomenda-se uma avaliação profissional.",
        },
      },
    },
  },
  no: {
    question: "Percebe que o veículo puxa para um dos lados ao dirigir?",
    yes: {
      conclusion: "Possível necessidade de alinhamento ou geometria.",
    },
    no: {
      question: "Sente vibrações no volante em altas velocidades?",
      yes: {
        conclusion: "Possível necessidade de balanceamento das rodas.",
      },
      no: {
        question: "O ar condicionado está funcionando corretamente?",
        yes: {
          question: "O consumo de combustível está acima do normal?",
          yes: {
            conclusion: "Possível necessidade de trocar filtros ou velas de ignição.",
          },
          no: {
            question: "Percebe ruídos ao trocar de marchas?",
            yes: {
              conclusion: "Possível desgaste na embreagem.",
            },
            no: {
              conclusion: "Recomenda-se uma avaliação profissional.",
            },
          },
        },
        no: {
          conclusion: "Possível problema no sistema de ar condicionado.",
        },
      },
    },
  },
};

const DiagnosticFlow: React.FC = () => {
  const [currentNode, setCurrentNode] = useState<DecisionNode>(decisionTree);

  const handleAnswer = (answer: "yes" | "no") => {
    const nextNode = currentNode[answer];
    if (nextNode) {
      setCurrentNode(nextNode);
    } else {
      alert("Fluxo inválido. Por favor, reinicie.");
      setCurrentNode(decisionTree);
    }
  };

  const restartFlow = () => {
    setCurrentNode(decisionTree);
  };

  return (
    <div>
      {currentNode.question && (
        <>
          <p>{currentNode.question}</p>
          <button onClick={() => handleAnswer("yes")}>Sim</button>
          <button onClick={() => handleAnswer("no")}>Não</button>
        </>
      )}
      {currentNode.conclusion && (
        <>
          <p><strong>{currentNode.conclusion}</strong></p>
          <button onClick={restartFlow}>Reiniciar</button>
        </>
      )}
    </div>
  );
};

export default DiagnosticFlow;
