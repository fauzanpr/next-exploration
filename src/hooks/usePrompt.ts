import { PromptsAtom } from "@/stateman/data";
import { PromptsModel } from "@/models/promptModel";
import { useAtom, useAtomValue } from "jotai";
import { DetailIdAtom } from "@/stateman/state";

function usePrompt() {
    const [promptsAtom, setPromptsAtom] = useAtom(PromptsAtom);
    const detailId = useAtomValue(DetailIdAtom);

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

    const getPromptDetails = () => {
        return promptsAtom.filter(data => data.id === detailId)[0];
    }

    return {
        sendPromptData,
        deletePromptData,
        getPromptDetails
    };
}

export default usePrompt;