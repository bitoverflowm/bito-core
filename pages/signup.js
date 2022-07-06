import { useState } from "react"

import Profile from "./profile"
import Layout from "../components/layout/layout"
import SignUpForm from "../components/authForms/signupForm"

const SignUp = () => {

    const SubTitle = 'Cancel any time. All your tech needs and beyond, serviced at your fingertips. First month is a deposit. If you do not like our service you can cancel within 30 days and receive all cash back!'

    return (
        <Layout title='Sign Up' subTitle={SubTitle}> 
            <SignUpForm />
        </Layout>
    )
}


export default SignUp