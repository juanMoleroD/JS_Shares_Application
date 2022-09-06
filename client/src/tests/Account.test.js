import Account from "../containers/Account";
import {render, fireEvent, waitFor} from '@testing-library/react';


describe("Account", () => {

    let container;
    beforeEach(() => {
        container = render(< Account />);
    });

    it("displays the banks details", () => {
        const containerValue = container.getByTestId("bankDetails")
        expect(containerValue.textContent).toEqual("Bank Details")
    })
})