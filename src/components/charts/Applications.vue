<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['Jan','Feb', 'Mar', 'April', 'May'],
      datasets: [
        {
          label: '# of applications submitted',
          backgroundColor: '#41b883',
          data: [20, 40, 20, 80, 100]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>