import { useOnNotificationSubscription } from "@/generated/graphql";

export const NotificationListener = () => {
  const {
    data,
    loading: loadingNotification,
    error
  } = useOnNotificationSubscription();

  if (loadingNotification) {
    return <h2 className="text-amber-600">CARGANDO NOTIFICACION</h2>;
  }

  if(error){
    return <h2 className="text-red-600">{error.message}</h2>;
  }

  console.log("SUBSCRIPTION DATA:", data);
  return (
    <h1 className="text-green-600">{data?.notification.content}</h1>
  );
};
