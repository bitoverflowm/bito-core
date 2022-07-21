import { useState } from "react"
import Link from "next/link"

import Profile from "./profile"
import Layout from "../components/layout/layout"
import SignUpForm from "../components/authForms/signupForm"

const SignUp = () => {


    return (
        <Layout> 
            <SignUpForm />
        </Layout>
    )
}


export default SignUp