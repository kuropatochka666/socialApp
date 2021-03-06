import { withFormik } from "formik";
import validateForm from "../../../utils/validate";
import RegisterForm from "../components/RegisterForm";

export default withFormik({
	// Custom sync validation
	mapPropsToValues: () => ({
		email: "",
		password: "",
	}),
	validate: (values) => {
		let errors = {};
		validateForm({ isAuth: true, values, errors });

		return errors;
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},

	displayName: "RegisterForm", // helps with React DevTools
})(RegisterForm);
