---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/145189144?v=4',
    name: '找工作防踩雷',
    title: '找工作防踩雷开发者',  },
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      公告
    </template>
    <template #lead>
      由于维护该网页需要消耗本人业余时间，且最近两个月并未得到正向反馈，故该网页更新至2024年12月31日，也就是说2025年开始该网页 https://bileigongsi.icu 将迈向互联网坟墓。值得注意的是，该网页停止维护（EOL）之后 👉 链接 bileigongsi.github.io 依旧可以当作备用网页访问。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
