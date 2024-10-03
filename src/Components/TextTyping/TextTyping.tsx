import './index.scss';
import { useEffect, useReducer } from "react";

interface TextTypingProps {
    Text: string[];
};

interface State {
    text: string;
    textLoop: number;
    isDeleting: boolean;
    deltaTime: number;
};

type Action =
    | { type: 'SET_TEXT', payload: string }
    | {
        type: 'UPDATE_STATE', payload: {
            textLoop?: number,
            isDeleting: boolean,
            deltaTime: number
        }
    }
;

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'UPDATE_STATE':
            return { ...state, ...action.payload };
        case 'SET_TEXT':
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

const TextTyping = ({ Text }: TextTypingProps) => {
    const initialArgs = {
        text: "",
        textLoop: 0,
        isDeleting: false,
        deltaTime: 100
    }
    const [state, dispatch] = useReducer(reducer, initialArgs);
    const period: number = 50;

    useEffect(() => {
        setTimeout(() => {toType()}, state.deltaTime);

    }), [state.text];

    const toType = async () => {
        const i = state.textLoop % Text.length;
        const fullText = Text[i];

        const updatedText = state.isDeleting ? (
            fullText.substring(0, state.text.length - 1)
        ) : (
            fullText.substring(0, state.text.length + 1)
        );

        switch (true) {
            case (!state.isDeleting && state.text === fullText):
                await new Promise<void>(resolve => {
                    setTimeout(() => {
                        dispatch({
                            type: 'UPDATE_STATE',
                            payload: {
                                isDeleting: true,
                                deltaTime: period
                            }
                        });
                        resolve();
                    }, i === 0 ? 1000 : 500);
                });
                break;

            case (state.isDeleting && state.text === ""):
                await new Promise<void>(resolve => {
                    dispatch({
                        type: 'UPDATE_STATE',
                        payload: {
                            isDeleting: false,
                            deltaTime: 100,
                            textLoop: state.textLoop + 1
                        }
                    });
                    resolve();
                });
                break;
            default:
                break;
        }

        dispatch({ type: 'SET_TEXT', payload: updatedText });
    };

    return (
        <>
            {state.text}
            <span className={state.isDeleting ? "" : "textTyping__cursor--blink"} >|</span>
        </>
    )
}

export default TextTyping;
