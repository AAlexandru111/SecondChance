import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch } from "../../app/store/configureStore";
import Donate from './Donate';

const stripePromise = loadStripe("pk_test_51IzwHFErFg8RLNropkfWpnL37TzyR3eTpn0vY0EmatAeBwxlNPFJT2e2VtfIt2V8975y2W7kC1gcQ5tB5B332Y2x00yktsLIxN")

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(donation => dispatch(setBasket(donation)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) return <LoadingComponent message='Loading checkout...' />

    return (
        <ElementsConsumer>
        {({stripe, elements}) => {

            <Donate stripe={stripe} elements={elements}/>
        }} 
        </ElementsConsumer>
    )
}