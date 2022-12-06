import { FC, useRef, useCallback, useEffect, useMemo } from 'react';

import { Cat, CatConditions } from '@/shared/lib/game/cat';
import { Resources } from '@/shared/lib/game/resources';
import { assets } from '@/shared/assets';

const imageWidth = 423;
const imageHeight = 480;

const canvasScale = 3.3;

class Builder {
    assets: string[] = []
    conditions: CatConditions[] = []

    add(condition: CatConditions) {
        switch (condition) {
            case CatConditions.Sleep: {
                this.assets.push(assets.SleepCatAsset)
                break
            }
            case CatConditions.Pending: {
                this.assets.push(assets.SleepCatBlackAsset)
                break
            }
            default: {
                return this
            }
        }

        this.conditions.push(condition)
        return this
    }

    create(): [string[], CatConditions[]] {
        return [this.assets, this.conditions]
    }
}

type Props = {
    imageWidth: number,
    imageHeight: number,
    canvasScale?: number,
    conditions: CatConditions | CatConditions[]
}

const AnimateCanvas: FC<Props> = ({ imageWidth, imageHeight, canvasScale = 1, conditions }) => {
    const conditionsArray = useMemo(() => {
        return Array.isArray(conditions) ? conditions : [conditions]
    }, [conditions])

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isRender = useRef(false)
    const catRef = useRef<Cat | null>(null)
    const resRef = useRef<Resources | null>(null)

    const renderApp = useCallback(() => {
        if (canvasRef.current && resRef.current) {
            const cat = new Cat(resRef.current)
            catRef.current = cat;
            cat.setConditions(conditionsArray[0]);
            cat.run(canvasRef.current, canvasScale);
        }
    }, [canvasScale, conditionsArray])

    const click = () => {
        if(catRef.current){
            catRef.current.setConditions(conditionsArray[1])
        }
    }

    useEffect(() => {
        if (!isRender.current) {
            isRender.current = true
            resRef.current = new Resources();
            const builder = new Builder()
            conditionsArray.forEach(condition => {
                builder.add(condition)
            })

            const [assets] = builder.create()
            resRef.current.onReady(renderApp);
            resRef.current.load(assets);
        }
    }, [renderApp, conditionsArray]);

    return (
        <>
            <canvas ref={canvasRef} width={imageWidth} height={imageHeight} />
            <button onClick={click}>Ешь!</button>
        </>
    );
}

export const AnimationSleepCat = () => {
    return (
        <AnimateCanvas
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            canvasScale={canvasScale}
            conditions={[CatConditions.Sleep, CatConditions.Pending]}
        />
    )
};
