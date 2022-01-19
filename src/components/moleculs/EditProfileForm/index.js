import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Gap} from '../../atoms'

const EditProfileForm = ({onSubmitEditing}) => {
    return (
        <View>
            <Gap height={26} />
            <Input label="Nama Lengkap" onSubmitEditing={onSubmitEditing} name="name"/>
            <Gap height={24} />
            <Input label="Pekerjaan" onSubmitEditing={onSubmitEditing} name="job"/>
            <Gap height={24} />
            <Input label="Email" onSubmitEditing={onSubmitEditing} name="email"/>
            <Gap height={24} />
            <Input label="Password" onSubmitEditing={onSubmitEditing} name="password"/>
            <Gap height={40} />
        </View>
    )
}

export default EditProfileForm

const styles = StyleSheet.create({})
