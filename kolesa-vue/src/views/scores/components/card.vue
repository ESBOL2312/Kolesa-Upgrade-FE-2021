<template>
    <div class="score-card">
        <div>
            <img src="@/assets/conference1.svg" alt="" width="48px">
            <h5 class="score-card__title">
                {{CardData.title}}
            </h5>
            <div class="y-badge">
                {{CardData.scores}} баллов
            </div>
            <p class="score-card__text">
                {{CardData.text}}
            </p>
        </div>
        <button type="button" class="btn primary-btn"> Отправить заявку </button>
    </div>
</template>
<script>
export default {
    name:'score-card',
    props:['CardData']
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/vars.scss";
    .score-card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 2px 10px rgba(28, 24, 25, 0.1);
        border-radius: 16px;
        padding: 25px;
        &__title{
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height, or 150% */
            color: #000000;
            margin-bottom: 8px;
        }
        &__text{
            margin-top: 8px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            color: #000000;
            margin-bottom: 20px;
        }
    }
    .y-badge{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        color: #1C1819;
        background: #E9F2FB;
        border-radius: 4px;
        height: 20px;
        padding: 0 12px;
        display: inline-block;
    }
</style>