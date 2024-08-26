import { PromptsAtom } from "@/data";
import { PromptsModel } from "@/models/promptModel";
import { useAtom } from "jotai";

function usePrompt() {
    const [promptsAtom, setPromptsAtom] = useAtom(PromptsAtom);

    const sendPromptData = ({ prompts, title }: PromptsModel) => {
        const lastId = promptsAtom.length;
        setPromptsAtom(prev => {
            const newData: PromptsModel = {
                id: lastId + 1,
                title: title,
                prompts: prompts
            };

            return [...prev, newData];
        })
    };

    const deletePromptData = (id: number) => {
        setPromptsAtom(prev => {
            return prev.filter(data => data.id !== id);
        });
    }

    return {
        sendPromptData,
        deletePromptData
    };
}

export default usePrompt;