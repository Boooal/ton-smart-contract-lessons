import {compile, NetworkProvider} from "@ton-community/blueprint";
import {MainContract} from "../wrappers/MainContract";
import {address, toNano} from "ton-core";

export async function run(provider: NetworkProvider) {
    const myContract = MainContract.createFromConfig(
        {
            number: 0,
            address: address('0QD0wEao-3_okZQoXjyCe8o_YywSEo0AjpbiwoiZRenyQ_7B'),
            owner_address: address('0QD0wEao-3_okZQoXjyCe8o_YywSEo0AjpbiwoiZRenyQ_7B'),
        },
        await compile("MainContract")
    );

    const openedContract = provider.open(myContract);
    openedContract.sendDeploy(provider.sender(), toNano("0.05"));
    await provider.waitForDeploy(myContract.address);
}