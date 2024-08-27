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

    const updatePromptData = ({ updatedPrompt }: { updatedPrompt: PromptsModel }) => {
        setPromptsAtom(prev => {
            const left = prev.filter(data => data.id ? data.id < detailId : false);
            const right = prev.filter(data => data.id ? data.id > detailId : false);
            return [
                ...left,
                updatedPrompt,
                ...right
            ]
        });
    };

    return {
        sendPromptData,
        deletePromptData,
        getPromptDetails,
        updatePromptData
    };
}

export default usePrompt;