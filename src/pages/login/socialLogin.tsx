import { IconButton } from "@/components/";
import { useState } from "react";
import { methods, Method } from "@/constants/socialLoginMethods";

const SocialLoginButtons = () => {
  const [loginMethod, setLoginMethod] = useState<string>();

  return (
    <div id="other-signin-buttons">
      {methods.map((method: Method) => (
        <IconButton
          key={method.id}
          src={method.src}
          tooltip={method.tooltip}
          onClick={() => {
            if (method.value === loginMethod) {
              setLoginMethod(undefined);
              return;
            }

            setLoginMethod(method.value);
          }}
          isHighlight={method.value === loginMethod}
        />
      ))}
    </div>
  );
};

export default SocialLoginButtons;
