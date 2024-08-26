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

    return {
        sendPromptData
    };
}

export default usePrompt;