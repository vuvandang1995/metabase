/* @flow */

import { nestThisQuery } from "metabase/qb/lib/actions";

import type {
    ClickAction,
    ClickActionProps
} from "metabase/meta/types/Visualization";

export default ({ question }: ClickActionProps): ClickAction[] => {
    console.log(question);
    if (question.id()) {
        return [
            {
                name: "nest-query",
                title: "Analyze the results of this Query",
                icon: "table",
                question: () => question.composeThisQuery()
            }
        ];
    }
    return [];
};