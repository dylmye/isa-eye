import { useForm } from "react-hook-form";
import { View } from "react-native";

import AddModal, { type AddModalProps } from "@/components/AddModal";
import {
  ControlledCheckboxField,
  ControlledTextField,
} from "@/components/fields";
import DeleteButton from "@/components/fields/DeleteButton";
import FormUI from "@/components/fields/FormUI";
import SubmitButton from "@/components/fields/SubmitButton";
import hooks from "@/hooks/database";

interface EditProductModalUIProps extends AddModalProps {
  onSubmitForm: (data: EditProductData) => void;
  onPressDelete: () => void;
}

export interface EditProductData {
  productName: string;
  isFlexible: boolean;
}

const EditProductModalUI = ({
  onSubmitForm,
  onPressDelete,
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

  const onDelete = () => {
    onPressDelete();
    onDismiss();
  };

  return (
    <AddModal {...props}>
      <AddModal.Header text="Edit account" onDismiss={onDismiss} />
      {Object.keys(existingProductData ?? {}) ? (
        <FormUI>
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
          <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
            <DeleteButton onPress={onDelete} />
            <SubmitButton onPress={handleSubmit(onSubmit)} />
          </View>
        </FormUI>
      ) : (
        <p>Loading...</p>
      )}
    </AddModal>
  );
};

export default EditProductModalUI;
