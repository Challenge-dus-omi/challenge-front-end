import React, { useState } from "react";
import jsPDF from "jspdf";
import portoRepairIA from '../../assets/logo-portorepairia-branco.png';

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

interface HistoryItem {
  question: string;
  answer: string;
}

const DiagnosticFlow: React.FC = () => {
  const [currentNode, setCurrentNode] = useState<DecisionNode>(decisionTree);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [conclusion, setConclusion] = useState<string | null>(null);

  const handleAnswer = (answer: "yes" | "no") => {
    if (!currentNode.question) return;

    const question = currentNode.question;

    setHistory((prevHistory) => [
      ...prevHistory,
      { question, answer: answer === "yes" ? "Sim" : "Não" },
    ]);

    const nextNode = currentNode[answer];
    if (nextNode) {
      if (nextNode.conclusion) {
        setConclusion(nextNode.conclusion);
      }
      setCurrentNode(nextNode);
    } else {
      alert("Fluxo inválido. Por favor, reinicie.");
      restartFlow();
    }
  };

  const restartFlow = () => {
    setCurrentNode(decisionTree);
    setHistory([]);
    setConclusion(null);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Diagnóstico do Veículo", 105, 20, { align: "center" });

    // Histórico de Perguntas e Respostas
    doc.setFontSize(12);
    let yOffset = 30;

    history.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.question}`, 10, yOffset);
      yOffset += 7;
      doc.text(`   Resposta: ${item.answer}`, 10, yOffset);
      yOffset += 10;

      if (yOffset > 270) {
        doc.addPage();
        yOffset = 20;
      }
    });

    if (conclusion) {
      doc.setFontSize(14);
      doc.text("Resultado Final:", 10, yOffset);
      yOffset += 7;
      doc.setFontSize(12);
      doc.text(conclusion, 10, yOffset);
    }
    doc.save("diagnostico.pdf");
  };

  return (
    <div className="container-question">

      <img src={portoRepairIA} alt="Logo da porto repair ia" />

      {currentNode.question && !conclusion && (
        <>
          <div className="question">
            <p>{currentNode.question}</p>
          </div>
          <div className="button-container">
            <button onClick={() => handleAnswer("yes")} className="button-question">
              Sim
            </button>
            <button onClick={() => handleAnswer("no")} className="button-question">
              Não
            </button>
          </div>
        </>
      )}
      {conclusion && (
        <>
          <p className="result-question">{conclusion}</p>
          <button onClick={restartFlow} className="button-question">
            Reiniciar
          </button>

          <button onClick={generatePDF} className="button-download">
            Download do Diagnóstico
          </button>
        </>
      )}
    </div>
  );
};

export default DiagnosticFlow;
