import { fireEvent, render, screen } from "@testing-library/react"
import { withDelay } from '../../setupTests';
import { withWholeContext } from "../../testHelpers";
import { UseMemo } from "./UseMemo";

test('useMemo page', async () => {
    const content = withWholeContext(UseMemo);
    render(content);
})