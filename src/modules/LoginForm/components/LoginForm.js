import React from "react";
import { Button, Block } from "../../../components";
import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function LoginForm(props) {
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
	} = props;
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<div>
			<div className='auth__top'>
				<h2>Войти в акаунт</h2>
				<p>Пожалуйста войдите в свой акаунт</p>
			</div>
			<Block>
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onSubmit={handleSubmit}>
					<Form.Item
						validateStatus={
							!touched.email ? "" : errors.email ? "error" : "success"
						}
						hasFeedback
						name='mail'
						rules={[
							{
								required: true,
								// message: "Please input your Username!",
							},
						]}>
						<Input
							id='email'
							prefix={<MailOutlined className='site-form-item-icon' />}
							placeholder='Email'
							size='large'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Form.Item>
					<Form.Item
						name='password'
						hasFeedback
						validateStatus={
							!touched.password ? "" : errors.password ? "error" : "success"
						}
						rules={[
							{
								required: true,
								// message: "Please input your Password!",
							},
						]}>
						<Input
							id='password'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Пароль'
							size='large'
						/>
					</Form.Item>
					<Form.Item>
						<Button
							onClick={handleSubmit}
							type='primary'
							htmlType='submit'
							className='login-form-button'
							size='large'>
							Войти в акаунт
						</Button>
					</Form.Item>

					<Link className='auth__register-link' to='/register'>
						Зарегестрироваться
					</Link>
				</Form>
			</Block>
		</div>
	);
}

export default LoginForm;
