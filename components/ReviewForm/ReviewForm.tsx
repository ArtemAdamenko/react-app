import {ReviewFormProps} from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {Button, Input, Rating, Textarea} from "@/components";
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "@/components/ReviewForm/ReviewForm.interface";
import axios from "axios";
import {API} from "@/helpers/api";
import {useState} from "react";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {
                ...formData,
                productId
            });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Something wrong');
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}
            >
                <Input {...register('name', {required: {value: true, message: 'Fulfill name'}})} placeholder={'Name'}
                       error={errors.name}/>
                <Input {...register('title', {required: {value: true, message: 'Fulfill title'}})} placeholder={'Title'}
                       className={styles.title} error={errors.title}/>
                <div className={styles.rating}>
                    <span>Rate:</span>
                    <Controller control={control} name={'rating'}
                                rules={{required: {value: true, message: 'Fulfill rate'}}}
                                render={({field}) => (
                                    <Rating
                                        isEditable={true}
                                        rating={field.value}
                                        ref={field.ref}
                                        setRating={field.onChange}
                                        error={errors.rating}/>
                                )}/>
                </div>
                <Textarea placeholder={'Review text'}
                          {...register('description', {required: {value: true, message: 'Fulfill description'}})}
                          className={styles.description}
                          error={errors.description}/>
                <div className={styles.submit}>
                    <Button appearance={'primary'}>Send</Button>
                    <span className={styles.info}>* special text</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)}>
                <div className={styles.successTitle}>
                    Your review sent
                </div>
                <div>
                    Thank you!
                </div>
                <CloseIcon className={styles.closeIcon} onClick={() => setIsSuccess(false)}/>
            </div>
            }
            {error && <div className={cn(styles.error, styles.panel)}>
                {error}
                <CloseIcon className={styles.closeIcon} onClick={() => setError(undefined)}/>
            </div>
            }
        </form>
    );
};
