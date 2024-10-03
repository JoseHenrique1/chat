export interface propsAlert {
  message?: string
}

export function Alert({ message }: propsAlert) {
  return (
    <p className="text-sm text-orange-400 font-bold">
      {message}
    </p>
  );
}