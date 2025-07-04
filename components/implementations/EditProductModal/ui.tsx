import { useForm } from "react-hook-form";
import { View } from "react-native";

import AddModal, { AddModalProps } from "@/components/AddModal";
import {
  ControlledTextField,
  ControlledCheckboxField,
} from "@/components/fields";
import SubmitButton from "@/components/fields/SubmitButton";
import FormUI from "@/components/fields/FormUI";
import hooks from "@/hooks/database";
import DeleteButton from "@/components/fields/DeleteButton";
import ThemedText from "@/components/ThemedText";

interface EditProductModalUIProps extends AddModalProps {
  onSubmitForm: (data: EditProductData) => void;
}

export interface EditProductData {
  productName: string;
  isFlexible: boolean;
}

const EditProductModalUI = ({
  onSubmitForm,
  existingId,
  ...props
}: EditProductModalUIProps) => {
  const existingProductData = hooks.useRow("products", existingId!);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProductData>({
    shouldUnregister: true,
  });

  const onDismiss = () => {
    reset();
    props.onDismiss?.();
  };

  const onSubmit = (data: EditProductData) => {
    onSubmitForm(data);
    onDismiss();
  };

  return (
    <AddModal {...props}>
      <AddModal.Header text="Edit account" onDismiss={onDismiss} />
      {Object.keys(existingProductData ?? {}) ? (<FormUI>
        <ControlledTextField<EditProductData, "productName">
          control={control}
          errors={errors}
          defaultValue={existingProductData.friendlyName}
          name="productName"
          label="Nickname"
        />
        <ControlledCheckboxField<EditProductData, "isFlexible">
          control={control}
          errors={errors}
          defaultValue={existingProductData.flexible}
          name="isFlexible"
          label="Flexible?"
          note="Check with your bank whether this ISA is flexible."
        />
        <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
          <DeleteButton onPress={() => {}} />
          <SubmitButton onPress={handleSubmit(onSubmit)} />
        </View>
      </FormUI>) : <p>Loading...</p>}
    </AddModal>
  );
};

export default EditProductModalUI;
